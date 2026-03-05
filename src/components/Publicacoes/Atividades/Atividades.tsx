import { ActivityCard, ActivityCardAvatarImage, ActivityCardBody, ActivityCardButtonLike, ActivityCardFooter, ActivityCardHeader, ActivityCardUserInfo, SectionTitle } from "./Atividades.styles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublicIcon from "@mui/icons-material/Public";

const activities = [
  {
    id: 1,
    name: "Felipe Silva",
    date: "8 de março às 18:00",
    avatar: "/rosto_06.png",
    post: "/post-01.png"
  },
  {
    id: 2,
    name: "Andreza Souza",
    date: "8 de março às 18:00",
    avatar: "/rosto_07.png",
    post: "/post-02.png"
  },
  {
    id: 3,
    name: "Felipe Silva",
    date: "8 de março às 18:00",
    avatar: "/rosto_06.png",
    post: "/post-01.png"
  },
];

export default function Atividades() {
    return (
        <>
            <SectionTitle>Atividades</SectionTitle>

            {activities.map((activity) => (
                <ActivityCard key={activity.id}>
                    <ActivityCardHeader>
                        <ActivityCardAvatarImage src={activity.avatar} alt={activity.name} />
                        <ActivityCardUserInfo>
                            <strong>{activity.name}</strong>
                            <span>
                                {activity.date} 
                                &middot; 
                                <PublicIcon />
                            </span>
                        </ActivityCardUserInfo>
                    </ActivityCardHeader>
                    <ActivityCardBody>
                        <img src={activity.post} alt={activity.name} />
                    </ActivityCardBody>
                    <ActivityCardFooter>
                        <ActivityCardButtonLike>
                            <FavoriteBorderIcon /> Curtir
                        </ActivityCardButtonLike>
                    </ActivityCardFooter>
                </ActivityCard>
            ))}
        </>
    )
}