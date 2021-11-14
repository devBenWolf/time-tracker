import {useState} from "react"

import Dashboard from "../components/Dashboard";
import { MainContainer } from "../components/Dashboard/styles/dashboardStyles";
import {daily, weekly, monthly} from "../data/userData"


const DashboardContainer = () => {
    const [currentTime, setCurrentTime] = useState(daily)

    const handleDaily = () => {
        setCurrentTime(daily)
    }

    const handleWeekly = () => {
        setCurrentTime(weekly)
    }
    const handleMonthly = () => {
        setCurrentTime(monthly)
    }

    return ( 
        <MainContainer>
            <Dashboard.SecondaryContainer>
                <Dashboard.UserPanel>
                    <Dashboard.UserSubpanel>
                        <Dashboard.UserSubpanelImage src = {"./images/image-jeremy.png"} />
                        <Dashboard.UserSubpanelTextContainer>
                            <Dashboard.UserSubpanelSubtitle>
                                Report for
                            </Dashboard.UserSubpanelSubtitle>
                            <Dashboard.UserSubpanelTitle>
                                Jeremy Robinson
                            </Dashboard.UserSubpanelTitle>
                        </Dashboard.UserSubpanelTextContainer>
                    </Dashboard.UserSubpanel>
                    <Dashboard.UserPanelButtonContainer>
                        <Dashboard.UserPanelButton 
                            onClick = {handleDaily}
                        >Daily
                        </Dashboard.UserPanelButton>
                        <Dashboard.UserPanelButton 
                            onClick = {handleWeekly}
                        >Weekly
                        </Dashboard.UserPanelButton>
                        <Dashboard.UserPanelButton 
                            onClick = {handleMonthly}
                        >Monthly
                        </Dashboard.UserPanelButton>
                    </Dashboard.UserPanelButtonContainer>
                </Dashboard.UserPanel>
                {currentTime.map(item => (
                    <Dashboard.StatsPanel background = {item.background}>
                        <Dashboard.StatsImage src = {item.img} />
                        <Dashboard.StatsSubpanel>
                            <Dashboard.StatsSubpanelHeaderContainer>
                                {item.title}
                                <Dashboard.StatsSubpanelHeaderImage src = {item.ellipsis} />
                            </Dashboard.StatsSubpanelHeaderContainer>
                            <Dashboard.StatsSubpanelInfoContainer>
                                <Dashboard.StatsSubpanelInfoTitle>
                                    {item.current}hrs
                                </Dashboard.StatsSubpanelInfoTitle>
                                <Dashboard.StatsSubpanelInfoSubtitle>
                                    Last Week - {item.previous}hrs
                                </Dashboard.StatsSubpanelInfoSubtitle>
                            </Dashboard.StatsSubpanelInfoContainer>
                        </Dashboard.StatsSubpanel>
                    </Dashboard.StatsPanel>
                ))}
            </Dashboard.SecondaryContainer>
        </MainContainer>
     );
}
 
export default DashboardContainer;