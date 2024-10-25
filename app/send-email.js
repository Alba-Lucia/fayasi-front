const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });
  
    const data = await response.json();
    if (data.success) {
      // Manejo del éxito (por ejemplo, mostrar un mensaje)
    } else {
      // Manejo del error (por ejemplo, mostrar un mensaje de error)
    }
  };
  