import styled from 'styled-components'

const Footnote = styled('p')`
  margin: 1rem 0;
  line-height: 1;
`

const SectionHead = styled('h3')`
margin: 2rem 0 0 0;
`

const Financials = () => {
  return (
    <div id='financials'>
      <h2>Tuition</h2>
      <SectionHead>All Make a Plan facilitators</SectionHead>
      <ul>
        <li>Manage on-line school day</li>
        <li>Tutor children in academic subjects when necessary</li>
        <li>Provide enrichment activities when school work is finished</li>
        <li>Teach executive and self regulation and communication skills</li>
      </ul>

      <SectionHead>Part Time at Home Education Facilitator</SectionHead>

      <ul>
        <li>3 days a week, 6 hours a day</li>
        <li>1-2 Students $1000/week</li>
        <li>3-4 Students $1200/week</li>
      </ul>

      <SectionHead>Full Time at Home Education Facilitator</SectionHead>

      <ul>
        <li>5 days a week, 6 hours a day</li>
        <li>1-2 Students $1600/week</li>
        <li>3-4 Students $1920/week</li>
      </ul>

      <Footnote>
        <small>
        * for groups of 2 students cost is roughly $27 an hour per student <br /> for groups of 4 students cost is roughly $16 an hour per student.
        </small>
      </Footnote>
    </div>
  )
}

export default Financials
