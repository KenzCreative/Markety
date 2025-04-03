def generate_insights_and_content(insights):
    return {
        "insights": insights,
        "slack_message": f"📊 Here's a quick summary: {insights[0]}",
        "linkedin_post": f"""🎯 Campaign Highlight!
{insights[0]}
More to come soon – stay tuned! 🚀 #Marketing #CampaignInsights"""
    }