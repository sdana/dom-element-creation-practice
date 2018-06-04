// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const fragment = document.createDocumentFragment()
const articleElement = document.querySelector("#messages")

let createMessages = () => {
    let section1 = document.createElement("section")
    section1.textContent = "Hello, world. It's me"

    let section2 = document.createElement("section")
    section2.textContent = "Hi there! Good to hear from you again"

    let section3 = document.createElement("section")
    section3.textContent = "What did you have for dinner last night?"

    let section4 = document.createElement("section")
    section4.textContent = "I had kangaroo for the first time. It's delicious!"

    let section5 = document.createElement("section")
    section5.textContent = "Wow that's exciting"

    const messageSections = [section1, section2, section3, section4, section5]
    return messageSections
}

const messages = createMessages()
for (let i = 0; i < messages.length; i++){
    fragment.appendChild(messages[i])
}
articleElement.appendChild(fragment)