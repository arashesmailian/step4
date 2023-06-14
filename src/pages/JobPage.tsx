import {useMemo} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {IJob} from '@typings/IJob'
import CompanyPageHeader from '@components/CompanyPageHeader/CompanyPageHeader'
import JobPageDescription from '@components/JobPageDescription/JobPageDescription'
import JobPageBottomBanner from '@components/JobPageFooter/JobPageFooter'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'

const jobs = require('../../data.json')

const JobPage: React.FC = () => {
  const {id} = useParams()
  const job: IJob = useMemo(() => {
    return jobs.find((job: IJob) => String(job.id) === id)
  }, [id])
  return (
    <>
      <JobPageMainContainer>
        <CompanyPageHeader
          company={job.company}
          logoBackGroundColor={job.logoBackground}
          website={job.website}
        ></CompanyPageHeader>
        <JobPageDescription {...job} />
      </JobPageMainContainer>
      <Footer>
        <JobPageBottomBanner {...job} />
      </Footer>
    </>
  )
}

const WrappedJobPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <JobPage />
    </ErrorBoundary>
  )
}

export default JobPage

export const JobPageMainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: -3.5rem;
  padding: var(--padding-layout);
  transition: 0.5s linear;
`
export const Footer = styled.footer`
  width: 100%;
  background-color: var(--background-color-elements);
  transition: 0.2s linear;
  padding: var(--padding-layout);
`
