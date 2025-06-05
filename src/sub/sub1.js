

const SubPage1 = () => {
    return (
        <div className="sub">
            <div className="sub_visual">
                <img src="/img/sub_visual-01.jpg" alt="" />
            </div>{/* sub_visual */}

            <div className="sub_content">
                <div className="inner">
                     
                        <div className="text">
                            <h2>Smart To-Do Lists</h2>
                            <div className="text_info">
                                <strong>Digital tools help externalize your thoughts and reduce decision fatigue.</strong>
                                <p>Recommended tools:</p>
                            </div>
                        </div>{/* text */}

                        <div className="list">
                            <div className="item">
                                <strong>The 1-3-5 Rule: Prioritize with Ease</strong>
                                <p>Feeling overwhelmed by a long to-do list? Try the 1-3-5 rule.</p>
                                <ul>
                                    <li>1 big tas</li>
                                    <li>3 medium tasks</li>
                                    <li>5 small tasks</li>
                                </ul>
                            </div>
                            <div className="item">
                                <strong>Break Big Tasks into Actionable Steps</strong>
                                <p>A common mistake is writing vague or massive tasks like “Work on presentation.” Instead, break it down:</p>
                                <ul>
                                    <li>Create outline for slide deck</li>    
                                    <li>Find 3 supporting stats</li>
                                    <li>Design intro slide</li>
                                </ul>    
                            </div>
                            <div className="item">
                                <strong>Minute Stretching Sequence </strong>
                                <p>Here’s a simple full-body routine to wake up your body in just 5 minutes:</p>
                                <ul>
                                    <li>Neck Rolls – 10 seconds each side</li>
                                    <li>Shoulder Rolls – 10 forward, 10 backward</li>
                                    <li>Arm Circles – 15 seconds each direction</li>
                                </ul>
                            </div>
                            <div className="item">
                                <strong>Time-Block Your To-Do List</strong>
                                <p>Don’t just list tasks—schedule them. Assign blocks of time to each task using your calendar</p>
                                <ul>
                                    <li>9:00–10:00 → Write report</li>
                                    <li>10:30–11:00 → Email replies</li>
                                    <li>1:00–2:00 → Design review</li>
                                </ul>
                            </div>
                        </div>{/* list */}
                    
                </div>{/* inner */}
            </div>{/* sub_content */}
        </div>
    )
}

export default SubPage1;