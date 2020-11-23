import Image from 'next/image'

import WithChildren from "../components/WithChildren";
import WithoutChildren from "../components/WithoutChildren";

const Home = () => {
  return (
    <div>
      <h1>Bye FC</h1>
      <WithChildren>
        <Image 
          src="https://images.unsplash.com/photo-1605977216813-2db4874819b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" 
          width={340} 
          height={453}
        /> 
      </WithChildren>
      <WithoutChildren title="Eu não possuo children"/>
    </div>
  )
}
export default Home
