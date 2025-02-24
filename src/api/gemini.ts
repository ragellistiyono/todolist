export async function generateTaskResponse(task: string, apiKey: string): Promise<string> {
  try {
    const prompt = `Break down this task into clear steps: "${task}". 
    Format your response as follows:
    Main task description on the first line
    Then list subtasks on separate lines, each starting with a hyphen (-)
    Keep it concise and actionable.`;

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
