import { useStatContext } from "./StatContext";

const Tamagotchi = () => {
  const { name, hunger, happiness, cleanliness, growth, index_x, index_y } = useStatContext();
  console.log(name, hunger, happiness, cleanliness, growth, index_x, index_y);

  const imageStyle:React.CSSProperties = {
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: `translate(${index_x-112.5}px, ${index_y-112.5}px)`,
    width: 'auto',
    maxHeight: '200px',
    minHeight: '100px',
    height:'50vh'
  };

  let imgLink =
  name === "Tammy" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkC6eik7wJKas6zKgVmEehFpFcRzE28n0qg&s" :
  name === "Tommy" ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f560ad7-9882-4af4-8474-9b6f812eefd5/dh8rk9n-680da342-4de7-476b-8383-90c3bd0b622a.png/v1/fill/w_1280,h_1945/memetchi_cosplaying_as_arle_nadja__compile__by_juantonmendozatheboy_dh8rk9n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk0NSIsInBhdGgiOiJcL2ZcLzlmNTYwYWQ3LTk4ODItNGFmNC04NDc0LTliNmY4MTJlZWZkNVwvZGg4cms5bi02ODBkYTM0Mi00ZGU3LTQ3NmItODM4My05MGMzYmQwYjYyMmEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-wjjDkDZn0xqhb4a0hxOg1wAhP8rRUuvBt7TxATWb5U" :
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7266aab-f1c5-468a-94a0-d017b396cb41/dfwjp05-5ffce95d-d408-41ca-ba1c-f999881e7281.png/v1/fill/w_1280,h_1555/lovelitchi_bichi_by_bichilove_dfwjp05-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU1NSIsInBhdGgiOiJcL2ZcL2Q3MjY2YWFiLWYxYzUtNDY4YS05NGEwLWQwMTdiMzk2Y2I0MVwvZGZ3anAwNS01ZmZjZTk1ZC1kNDA4LTQxY2EtYmExYy1mOTk5ODgxZTcyODEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1YgA-maKgiUvAiuTD5IH9C-xgJieQ2iMkLnGA7PR5OE";
  if (hunger <= 0 || happiness <= 0 || cleanliness <= 0) {
    imgLink = "https://d29fhpw069ctt2.cloudfront.net/clipart/91808/preview/1343667790_preview_9a28.png"
  }
  else if (hunger <= 33 || happiness <= 33 || cleanliness <= 33) {
    imgLink = 
      name === "Tammy" ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e0c1eb9-682b-484f-9c7e-de0dee00c40d/dd7xtqg-01256b1c-ad48-4ae0-adbd-3daf22dc006d.png/v1/fill/w_894,h_894/mametchi_crying__remastered_in_tamagotchi__anime__by_jhg4glitchys_dd7xtqg-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTk5IiwicGF0aCI6IlwvZlwvNmUwYzFlYjktNjgyYi00ODRmLTljN2UtZGUwZGVlMDBjNDBkXC9kZDd4dHFnLTAxMjU2YjFjLWFkNDgtNGFlMC1hZGJkLTNkYWYyMmRjMDA2ZC5wbmciLCJ3aWR0aCI6Ijw9OTk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zFtCLeAyeRTcd2JWValgztmb9k-frfTg0WPpETFz35U" :
      name === "Tommy" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfRty_owAZdA5OZV_h6lu5zooun_dvlaqvw&s" :
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d8298ce-6723-45eb-83d0-15a53e5a5fe4/dhi1j9i-b1597f9f-a983-4336-94d7-dda50dc76746.png/v1/fill/w_755,h_938/tamadowssr_s_girl_crying_with_lovelitchi_styled_by_myvidlii2016yt_dhi1j9i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM4IiwicGF0aCI6IlwvZlwvNmQ4Mjk4Y2UtNjcyMy00NWViLTgzZDAtMTVhNTNlNWE1ZmU0XC9kaGkxajlpLWIxNTk3ZjlmLWE5ODMtNDMzNi05NGQ3LWRkYTUwZGM3Njc0Ni5wbmciLCJ3aWR0aCI6Ijw9NzU1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.E9wH5WqIMIfFvNNOMYg509oKcOV5dbfMbezNHZ7CO7Q";
  }
  
  return (
  <>
    <img
     src={imgLink}
     alt="tamagotchi" 
     style={imageStyle}
     />
  </>
  )
}

export default Tamagotchi
