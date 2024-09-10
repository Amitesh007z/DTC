const buses = ['Bus001', 'Bus002', 'Bus003', 'Bus004']; // Example bus IDs

function getRandomBus() {
  const randomIndex = Math.floor(Math.random() * buses.length);
  return buses[randomIndex];
}

function assignLinkedDuty(crewId) {
  const assignedBus = getRandomBus();
  return {
    crewId,
    assignedBus,
    dutyType: 'linked',
    startTime: new Date(),
    endTime: new Date(new Date().getTime() + 8 * 60 * 60 * 1000), 
  };
}

function assignUnlinkedDuty(crewIds, numberOfTrips) {
  const shifts = [];
  for (let i = 0; i < crewIds.length; i++) {
    const assignedBus = getRandomBus();
    shifts.push({
      crewId: crewIds[i],
      assignedBus,
      dutyType: 'unlinked',
      tripNumber: i + 1, 
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), 
    });
  }
  return shifts;
}

module.exports = { assignLinkedDuty, assignUnlinkedDuty };
