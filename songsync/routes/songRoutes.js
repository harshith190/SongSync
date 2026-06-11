
const router=require('express').Router();

router.post('/detect',async(req,res)=>{
  res.json({
    success:true,
    song:'Detected Song',
    artist:'Artist Name',
    spotifyUrl:'https://open.spotify.com'
  });
});

module.exports=router;
