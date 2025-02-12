
import Hero from '../components/Hero'
import HomeCards from '../components/homecards'
import JobListings from '../components/joblistings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return <>
    <Hero />  
    <HomeCards />
    <JobListings isHome={true}/>
    <ViewAllJobs />
  </>
}

export default HomePage