export async function generateTaskResponse(task: string, apiKey: string): Promise<string> {
  try {
    const prompt = `Berikan respons dalam Bahasa Indonesia. Pecah tugas ini menjadi langkah-langkah yang jelas: "${task}".
    Format respons Anda sebagai berikut:
    Deskripsi tugas utama pada baris pertama
    Kemudian daftar sub-tugas pada baris terpisah, masing-masing dimulai dengan tanda hubung (-)
    Buatlah secara rinci, terstruktur dan dapat ditindaklanjuti.`;

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro-exp-02-05:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
  } catch (error) {
    console.error('Error generating response:', error)
    throw error
  }
}
