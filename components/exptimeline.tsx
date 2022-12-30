
import { Timeline, Events, Event } from 'vertical-timeline-component-react';
export const ExpTimeline: React.FC = () => {
    const customTheme = {
        borderDotColor: '#ffffff',
        descriptionColor: '#EDEDED',
        dotColor: '#d0cdc4',
        eventColor: '#965500',
        lineColor: '#d0cdc4',
        subtitleColor: '#EDEDED',
        titleColor: '#405b73',
        yearColor: '#405b73',
       };
    return <>
        <Timeline lang="en" theme={customTheme} dateFormat="only-number"  withoutDay>
            {/* <Event
            title="Lorem Ipsum"
            description={[
            "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            'Is simply dummy text of the printing and typesetting industry.',
            ]}
            /> */}
            <Events
            title="Apex Friendship High School"
            subtitle="Academy of Engineering (AoE)"
            startDate="2016/06/01"
            endDate="2020/05/01"
            
            >
                <Event
            title="Graduated in 2020"
            description={[
            "Weighted GPA: 4.5",
            "Summa Cum Laude",
            "Graduated from AoE"
            ]}
            />
            </Events>
            <Events
            title="North Carolina State University"
            subtitle="B.S. Computer Science"
            startDate="2020/08/01"
            active
            >
                <Event
            title="Graduating Fall 2023"
            description={[
            "GPA: 4.0",
            "Computer Science Honors",
            "Club Swim"
            ]}
            />
            </Events>
            <Events
            title="Software Engineering Co-Op"
            subtitle="RoviSys"
            startDate="2021/05/01"
            endDate="2021/08/01"
            >
                <Event
            description={[
            ]}
            />
            </Events>
            <Events
            title="Software Engineering Co-Op"
            subtitle="RoviSys"
            startDate="2022/01/01"
            endDate="2021/04/01"
            >
                <Event
            description={[
            ]}
            />
            </Events>
            <Events
            title="Data Engineering Intern"
            subtitle="Fidelity Investments"
            startDate="2021/05/01"
            endDate="2021/08/01"
            >
                <Event
            description={[
            ]}
            />
            </Events>
            <Events
            title="Site Reliability Intern"
            subtitle="Workiva"
            startDate="2023/01/01"
            active
            >
                <Event
            description={[
            ]}
            />
            </Events>
        </Timeline>
    </>
}
