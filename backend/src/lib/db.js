import mongoose from 'mongoose'

export async function connectDB() {
   try {
    const conn = await mongoose.connect('mongodb+srv://l2565312:XIExhIrNLzlFFdH0@cluster0.mbook3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log(`Connected to MongoDB ${conn.connection.host}`)
   } catch (error) {
    console.log(`Failed to connect to MongoDB`, error)
    process.exit(1)
   }
}