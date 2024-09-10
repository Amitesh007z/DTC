const express = require('express');
const router = express.Router();
const Shift = require('../models/shift');
const Crew = require('../models/crew');
const { assignLinkedDuty, assignUnlinkedDuty } = require('../utils/busAssignment'); 

router.post('/assign-linked-duty', async (req, res) => {
  const { crewId } = req.body;

  try {
    const linkedDuty = assignLinkedDuty(crewId);

    const newShift = new Shift({
      crewId: linkedDuty.crewId,
      shiftType: linkedDuty.dutyType,
      assignedBus: linkedDuty.assignedBus,
      startTime: linkedDuty.startTime,
      endTime: linkedDuty.endTime,
    });

    await newShift.save();

    res.status(200).json({ message: 'Linked duty assigned successfully', shift: newShift });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error assigning linked duty', error: err.message });
  }
});

router.post('/assign-unlinked-duty', async (req, res) => {
  const { crewIds, numberOfTrips } = req.body;

  try {
    const unlinkedDutyShifts = assignUnlinkedDuty(crewIds, numberOfTrips);

    const savedShifts = [];
    for (let shift of unlinkedDutyShifts) {
      const newShift = new Shift({
        crewId: shift.crewId,
        shiftType: shift.dutyType,
        assignedBus: shift.assignedBus,
        startTime: shift.startTime,
        endTime: shift.endTime,
      });

      const savedShift = await newShift.save();
      savedShifts.push(savedShift);
    }

    res.status(200).json({ message: 'Unlinked duty assigned successfully', shifts: savedShifts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error assigning unlinked duty', error: err.message });
  }
});

module.exports = router;
