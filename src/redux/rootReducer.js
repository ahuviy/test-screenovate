const avatarColors = ['red', 'yellow', 'green', 'orange', 'purple', 'brown', 'lightgray'];

const initialState = {
  contacts: null,
  selectedContactId: null,
};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT_CONTACTS':
      const contacts = payload.map((c) => ({
        ...c,
        messages: [],
        avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
      }));

      return { ...state, contacts };

    case 'SELECT_CONTACT':
      return { ...state, selectedContactId: payload };

    case 'SEND_MESSAGE':
      return addMessage({
        state,
        contactId: payload.contactId,
        text: payload.text,
        isIncoming: false,
      });

    case 'RECEIVE_MESSAGE':
      return addMessage({
        state,
        contactId: payload.contactId,
        text: payload.text,
        isIncoming: true,
      });

    default:
      return state;
  }
};

function addMessage({ state, contactId, text, isIncoming }) {
  const relevantContact = state.contacts.find((c) => c.id === contactId);
  const timestamp = Date.now();
  const messages = relevantContact.messages.concat({ text, timestamp, isIncoming });

  const newContacts = [{ ...relevantContact, messages }].concat(
    state.contacts.filter((c) => c.id !== contactId)
  );

  return { ...state, contacts: newContacts };
}
