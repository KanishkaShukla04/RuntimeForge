export default function DashboardRenderer() {
 return (
  <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
   <h2 className="font-bold">Analytics Dashboard</h2>

   <div className="mt-4 space-y-2">
    <p>Users: 124</p>
    <p>Forms Submitted: 39</p>
    <p>Runtime Health: Stable</p>
   </div>
  </div>
 )
}