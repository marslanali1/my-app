import { getTAsk } from "./action"

interface Task {
   content: string,
    id: number
 }
 export default async function Home() {
 

  const tasklist = await getTAsk('http://127.0.0.1:8000/task')
  console.log(tasklist)
  return (
    <main className="">

      <h1 className="text-4xl p-4">Task List</h1>
      <div>
        {
          tasklist &&
           tasklist.map((task: Task )=>{
            return (
            <p className="p-2" key={task.id}>{task.content}</p>
          )
          })
        }
      </div>

    </main>
  ) 
  }