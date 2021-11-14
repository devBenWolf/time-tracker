import {MainContainer, 
        SecondaryContainer, 
        UserPanel, 
        UserPanelButtonContainer,
        UserPanelButton,
        UserSubpanel, 
        UserSubpanelImage, 
        UserSubpanelTextContainer,
        UserSubpanelTitle,
        UserSubpanelSubtitle,
        StatsPanel,
        StatsSubpanel,
        StatsSubpanelHeaderContainer,
        StatsSubpanelHeaderImage,
        StatsSubpanelInfoContainer,
        StatsSubpanelInfoTitle,
        StatsSubpanelInfoSubtitle, 
        StatsImage} from "./styles/dashboardStyles"

export default function Dashboard({children, ...props}) {
    return (
        <MainContainer {...props}>{children}</MainContainer>
    )
}

Dashboard.SecondaryContainer = function DashboardSecondaryContainer({children, ...props}) {
    return (
        <SecondaryContainer {...props}>{children}</SecondaryContainer>
    )
}
Dashboard.UserPanel = function DashboardUserPanel({children, ...props}) {
    return (
        <UserPanel {...props}>{children}</UserPanel>
    )
}
Dashboard.UserPanelButtonContainer = function DashboardUserPanelButtonContainer({children, ...props}) {
    return (
        <UserPanelButtonContainer {...props}>{children}</UserPanelButtonContainer>
    )
}

Dashboard.UserPanelButton = function DashboardUserPanelButton({children, ...props}) {
    return (
        <UserPanelButton {...props}>{children}</UserPanelButton>
    )
}
Dashboard.UserSubpanel = function DashboardUserSubpanel({children, ...props}) {
    return (
        <UserSubpanel {...props}>{children}</UserSubpanel>
    )
}
Dashboard.UserSubpanelImage = function DashboardUserSubpanelImage({...props}) {
    return (
        <UserSubpanelImage {...props} />
    )
}
Dashboard.UserSubpanelTextContainer = function DashboardUserSubpanelTextContainer({children, ...props}) {
    return (
        <UserSubpanelTextContainer {...props}>{children}</UserSubpanelTextContainer>
    )
}
Dashboard.UserSubpanelTitle = function DashboardUserSubpanelTitle({children, ...props}) {
    return (
        <UserSubpanelTitle {...props}>{children}</UserSubpanelTitle>
    )
}
Dashboard.UserSubpanelSubtitle = function DashboardUserSubpanelSubtitle({children, ...props}) {
    return (
        <UserSubpanelSubtitle {...props}>{children}</UserSubpanelSubtitle>
    )
}
Dashboard.UserSubpanelImage = function DashboardUserSubpanelImage({...props}) {
    return (
        <UserSubpanelImage {...props} />
    )
}

Dashboard.StatsPanel = function DashboardStatsPanel({children, ...props}) {
    return (
        <StatsPanel {...props}>{children}</StatsPanel>
    )
}
Dashboard.StatsImage = function DashboardStatsImage({children, ...props}) {
    return (
        <StatsImage {...props} />
    )
}
Dashboard.StatsSubpanel = function DashboardStatsSubpanel({children, ...props}) {
    return (
        <StatsSubpanel {...props}>{children}</StatsSubpanel>
    )
}
Dashboard.StatsSubpanelHeaderImage = function DashboardStatsSubpanelHeaderImage({...props}) {
    return (
        <StatsSubpanelHeaderImage {...props} />
    )
}
Dashboard.StatsSubpanelHeaderContainer = function DashboardStatsSubpanelHeaderContainer({children, ...props}) {
    return (
        <StatsSubpanelHeaderContainer {...props}>{children}</StatsSubpanelHeaderContainer>
    )
}
Dashboard.StatsSubpanelInfoContainer = function DashboardStatsSubpanelInfoContainer({children, ...props}) {
    return (
        <StatsSubpanelInfoContainer {...props}>{children}</StatsSubpanelInfoContainer>
    )
}
Dashboard.StatsSubpanelInfoTitle = function DashboardStatsSubpanelInfoTitle({children, ...props}) {
    return (
        <StatsSubpanelInfoTitle {...props}>{children}</StatsSubpanelInfoTitle>
    )
}
Dashboard.StatsSubpanelInfoSubtitle = function DashboardStatsSubpanelInfoSubtitle({children, ...props}) {
    return (
        <StatsSubpanelInfoSubtitle {...props}>{children}</StatsSubpanelInfoSubtitle>
    )
}

