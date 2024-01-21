// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  return /^chatbot/gi.test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const emoji = new RegExp(/emoji\d{4}/gi)
  return message.replace(emoji, "")
}
// console.log(
//   removeEmoji("I love playing videogames emoji3465 it's one of my hobbies")
// )

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regexPattern = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/
  if (regexPattern.test(number)) {
    return "Thanks! You can now download me to your phone."
  } else {
    return `Oops, it seems like I can't reach out to ${number}`
  }
}
// console.log(checkPhoneNumber("(+34) 659-771-594"))
/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regexPattern = /\b(?:https?:\/\/)?(?:www\.)?(\S+\.\S+)\b/g
  return userInput.match(regexPattern)

}
// console.log(getURL("I learned a lot from exercism.com and reddit.com"))
/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
    // Use a regular expression to extract first and last names
    const nameRegex = /([^,]+),\s*(\S+)/
    const match = fullName.match(nameRegex)
    
    if (match) {
      // Capitalize the first letter of the first and last names
      const firstName = match[2][0].toUpperCase() + match[2].substring(1)
      const lastName = match[1][0].toUpperCase() + match[1].substring(1)

      // Return the formatted string
      return `Nice to meet you, ${firstName} ${lastName}`
    } else {
      // Handle the case where the regular expression doesn't match
      return "Unable to determine name format. Nice to meet you!"
    }
}
