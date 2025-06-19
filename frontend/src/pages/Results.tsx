import { useEffect, useState } from "react";

type Subscriber = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  company?: string;
  experience?: string;
  interests?: string;
  newsletter: boolean;
  createdAt: string;
};

const Results = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/subscribers");
        const data = await res.json();
        setSubscribers(data);
      } catch (error) {
        console.error("Erro ao buscar inscritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Lista de Inscritos</h1>

      {loading ? (
        <p className="text-lg">Carregando...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subscribers.map((sub) => (
            <div
              key={sub._id}
              className="bg-white text-gray-900 p-4 rounded-2xl shadow-md"
            >
              <h2 className="text-xl font-semibold">{sub.name}</h2>
              <p className="text-sm">{sub.email}</p>
              {sub.phone && <p className="text-sm">📞 {sub.phone}</p>}
              {sub.company && <p className="text-sm">🏢 {sub.company}</p>}
              {sub.role && <p className="text-sm">👤 {sub.role}</p>}
              {sub.experience && <p className="text-sm">💼 {sub.experience}</p>}
              {sub.interests && <p className="text-sm">🎯 {sub.interests}</p>}
              <p className="text-sm">
                📬 Newsletter: {sub.newsletter ? "Sim" : "Não"}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Inscrito em: {new Date(sub.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
