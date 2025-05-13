export async function submitForm(form: HTMLFormElement): Promise<boolean> {
  try {
    const formData = new FormData(form);
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
} 