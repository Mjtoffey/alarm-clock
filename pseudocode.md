#Goal

to have a clock that will update every second without needing to refresh the page, and will issue an alert when a certain time interval is met.

#INIT variables

1. clock = local time
2. display = update at interval of 1000ms and show time as string
3. "alarm" = alert user of time
4. alert = a message to dispplay after "alarm" is hit

#FUCNTIONS

getTime()
  GET localTime from device
  DISPLAY localTime as string
END  
  
alertUser
  GET interval for alert
  DISPLAY alert in window
END

#THE PROGRAm

  displayClock()
  getTime()
  alertUser()
  
