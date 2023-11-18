import './App.css'
import { TwitterFollowCard } from './TwitterFollowCar'
export function App(){
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'WilliamAlonsoP6',
        name: 'William Pastor.',
        isFollowing: false
    },
    // {
    //     userName: 'PacoHdezs',
    //     name: 'Paco Hdez',
    //     isFollowing: true
    // },
    // {
    //     userName: 'TMChein',
    //     name: 'Tomas',
    //     isFollowing: false
    // }
    ]

return(
    <section className='App'>
        {
        users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >
            {name}
        </TwitterFollowCard>
            ))
        }
    </section>
)
}