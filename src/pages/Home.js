import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'
import SmoothieCard from '../components/SmoothieCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from('todos').select()

      if (error) {
        setFetchError('Could not fetch data.')
        setSmoothies(null)
        console.log(error)
      }

      if (data) {
        setSmoothies(data)
        setFetchError(null)
        console.log(data)
      }
    }

    fetchSmoothies()
  }, [])

  return (
    <div className="page home">
      <h2>Home</h2>

      <div>
        {fetchError && <p>{fetchError}</p>}
        {smoothies && (
          <div className="smoothies">
            <div className="smoothie-grid">
              {smoothies.map((smoothie) => (
                <SmoothieCard
                  key={smoothie.id}
                  smoothie={smoothie}
                ></SmoothieCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
