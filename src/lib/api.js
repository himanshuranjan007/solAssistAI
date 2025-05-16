const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


// Users API
export const createOrGetUser = async (walletAddress) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ walletAddress }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating/getting user:', error);
    throw error;
  }
};

// Recipients API
export const getRecipients = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipients/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipients:', error);
    throw error;
  }
};

export const addRecipient = async (recipientData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipientData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding recipient:', error);
    throw error;
  }
};

export const updateRecipient = async (userId, label, recipientData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipients/${userId}/${label}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipientData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating recipient:', error);
    throw error;
  }
};

export const deleteRecipient = async (userId, label) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipients/${userId}/${label}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    console.error('Error deleting recipient:', error);
    throw error;
  }
};

// Transactions API
export const processTransactionIntent = async (intentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/process-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(intentData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error processing transaction intent:', error);
    throw error;
  }
};

export const sendTransaction = async (transactionData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
}; 