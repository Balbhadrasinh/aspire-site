export const formatDateToCustomFormat=(isoDateTime)=>{
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(isoDateTime);
  
    const customFormat = date.toLocaleString('en-US', options).replace(/,/, '')
  
    return customFormat;
  }