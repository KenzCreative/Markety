def analyze_data(df):
    try:
        insights = []

        if 'Open Rate' in df.columns:
            top_open = df.sort_values('Open Rate', ascending=False).iloc[0]
            insights.append(f"Top open rate: {top_open['Open Rate']}% on {top_open.get('Campaign', 'Unknown')}")
        if 'Click Rate' in df.columns:
            avg_click = df['Click Rate'].mean()
            insights.append(f"Average click rate: {avg_click:.2f}%")
        if 'Bounce Rate' in df.columns:
            high_bounce = df[df['Bounce Rate'] > 50]
            if not high_bounce.empty:
                insights.append("Some campaigns have a high bounce rate.")

        return insights or ["No key metrics found."]
    except Exception as e:
        return [f"Error analyzing data: {str(e)}"]