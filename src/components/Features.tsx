'use client'
import { User, PieChartIcon, Box, Receipt } from "lucide-react"
import {motion} from 'framer-motion'
export default function Features (){
    const features = [
        {
            title: 'Task Assignment',
            icon: <User/>,
            description: <p>Tasks are assigned directly to wallet addresses. Identity is cryptographic and non-custodial.</p>,
        },
        {
            title: 'Analytics',
            icon: <PieChartIcon/>,
            description: <p>Every task action creation, submission, approval  is permanently recorded on-chain.</p>,
        },
        {
            title: 'Customization',
            icon: <Box/>,
            description: <p>Admins manage tasks and approvals, track submissions, rewards, and reputation</p>,
        },
                {
            title: 'Reputation & Rewards',
            icon: <Receipt/>,
            description: <p>Contributor reputation and rewards are computed from completed and approved tasks, forming a verifiable work history</p>,
        },
    ]

    return (
        <>
        <section id='Features' className="flex flex-col items-center bg-gray-100">
            <div className="mt-4">
                <h1 className="text-2xl font-bold ">Features to look forward to</h1>
            </div>
            <div className="grid grid-cols-1  gap-y-5 p-10  sm:grid-cols-3 items-center justify-around gap-x-5  ">
                {features.map((feature, index) => (
                    <motion.div key={index} className="flex flex-col p-5 gap-y-5 bg-gray-200 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    >
                        <div className="text-green-500">{feature.icon}</div>
                        <h2 className="font-bold">{feature.title}</h2>
                        <span>{feature.description}</span>
                    </motion.div>
                ))}
            </div>
        </section>
        </>
    )
}