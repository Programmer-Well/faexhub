import { PostActionButton, PostActionRow, PostAvatarImage, PostCard, PostInput, PostInputRow, PostPublishButton } from "./PostCard.styles";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoIcon from "@mui/icons-material/Photo";
import { useState } from "react";

const currentUser = {
  name: "Paulo Souza",
  email: "paulo.csouzas@outlook.com",
  avatar: "/perfil.jpg",
};

export default function PostCards() {
    const [postText, setPostText] = useState("");

    return (
        <PostCard>

            <PostInputRow>
                <PostAvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <PostInput 
                    type="text" 
                    placeholder="Comece uma publicação" 
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
                <PostPublishButton>Publicar</PostPublishButton>
            </PostInputRow>

            <PostActionRow>
                <PostActionButton>
                    <VideoLibraryIcon /> Video
                </PostActionButton>
                <PostActionButton>
                    <PhotoIcon /> Foto
                </PostActionButton>
            </PostActionRow>

        </PostCard>
    )
}