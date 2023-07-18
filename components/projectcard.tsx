export const ProjectCard: React.FC = ({title: String, desc: String}) => {

    return <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="p-4">
        <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{desc}</p>
        </div>
    </div>
    </div>

}