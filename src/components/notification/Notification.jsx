const Notification = ({ notificationData }) =>{
  const notificationStyle = {
    position: 'absolute',
    top: 275,
    right: 75,
    backgroundColor: notificationData.type == 'success'? 'darkgreen':'red',
    padding: 20, 
    color: 'white',
    borderRadius: 10,
    
  }
  return (
    <article style={notificationStyle}>
      <h4>{notificationData.type}</h4>{notificationData.text}
    </article>
  )
}

export default Notification;