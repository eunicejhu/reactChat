# ReactChat

## Tech Stack
React + Redux + Node + socket.io

## Features

### pages
* Home Page
  - enterRoom: Anyone can freely enter the chatRoom without password
* Chat Page
  - see/hide memberList
  - receive messages
  - compose message
  - send message
  - leaveRoom

### components
* enterRoomForm
  - name (input)
  - enterButton (button)
* memberList
  - memberItem
    * membername
* messagesPanel
  - message
    * messageSender
    * messageReceiveTime
    * messageContent (text, currently not support video or audio)
* composeMessageForm
  - composeArea (textarea)
  - sendButton (button)
* leaveRoom
  - leaveButton (button)

### Remarks:
* Chat history will not persist
* Messages will dispear 30 seconds after displayed on messagePanel (optional)

### screenshots:
home page

<img src="./images/home_page.png" width="400">

chat page

<img src="./images/chat_page.png" width="400">