"use server"

export const getTAsk = async (url: string) => {
  const fetchTAsk = await fetch(url)
  const data =  await fetchTAsk.json()
  return data
    }
    