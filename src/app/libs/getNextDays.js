

export const getNextDays = (startDate, daysToAdd, result = []) => {
    if (daysToAdd === 30) {
      return result;
    }
    
    const nextDay = new Date(startDate);
    nextDay.setDate(nextDay.getDate() + 1);
    
    return getNextDays(nextDay, daysToAdd + 1, [...result, nextDay]);
  }
  
 


