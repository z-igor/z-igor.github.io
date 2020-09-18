import messages from "../utils/messages";

export default function Headers(value) {
  if (!messages[value]) {
    return value;
  }
  return messages[value];
}