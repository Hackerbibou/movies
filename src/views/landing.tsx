'use client';

// material-ui

import Box from '@mui/material/Box';

// project imports

import util from 'api/movies';
import utils from 'api/tvshows';
import {useState, useEffect} from 'react';
import HeaderSection from 'components/landingpage/HeaderSection';

import PreBuildDashBoard from 'components/landingpage/PreBuildDashBoard';

import FrameworkSection from 'components/landingpage/FrameworkSection';


// types

import CircularLoader from 'ui-component/CircularLoader';

// =============================|| LANDING MAIN ||============================= //
type movi = 
          {
            "adult": boolean,
            "backdrop_path": string,
            "genre_ids": number[],
            "id": number,
            "origin_country": string[],
            "original_language": string,
            "original_name": string,
            "overview": string,
            "popularity": number,
            "poster_path":string,
            "first_air_date": Date,
            "name": string,
            "vote_average": number,
            "vote_count": number,
            "original_title": string,
            "release_date": Date,
            "title": string,
            "video": boolean
          };
const Landing = () => {
  // const theme = useTheme();
  const [headMovie, setHead] = useState<movi>()
  const [popularMovie, setPopular] = useState<movi[]>([])
  const [nowplayingMovie, setNowplaying] = useState<movi[]>([])
  const [topratedMovie, setToprated] = useState<movi[]>([])
  const [popularShow, setPopularS] = useState<movi[]>([])
  const [nowplayingShow, setNowplayingS] = useState<movi[]>([])
  const [topratedShow, setTopratedS] = useState<movi[]>([])
  const [loadingg,setLoading]=useState(true)
  useEffect(()=>{
    (async()=>{
      const a:any=await util.getTrendingMov();
      const b:any=await util.getTopratedMov();
      const c:any=await util.getNowplayingMov();
      const d:any=await utils.getTrendingShow();
      const e:any=await utils.getTopratedShow();
      const f:any=await utils.getNowplayingShow();
      console.log(a)
      if(a && b && c && d && e && f) {
        setHead(a[Math.floor(Math.random()*(a.length-1))]);
        setPopular(a);
        setNowplaying(b);
        setToprated(c);
        setPopularS(d);
        setNowplayingS(e);
        setTopratedS(f);
        setLoading(false);
      }
    })();
    
  },[])
  
  return loadingg?<CircularLoader/>:(
    <Box >
      {/* 1. header and hero section */}
      <Box sx={{width:'100%'}}>
        {/* <AppBar /> */}
        <HeaderSection headMovie={headMovie}/>
      </Box>

      {/* 2. card section */}
      {/* <Box sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.dark' : 'background.default' }}>
        <CardSection />
      </Box> */}

      {/* 4. Developer Experience section */}
      {/* <Box sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100' }}>
        <CustomizeSection />
      </Box> */}

      {/* 3. about section */}
      {/* <Box sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.dark' : 'background.default' }}>
        <FeatureSection />
      </Box> */}

      {/* 4. Apps */}
      <Box sx={{ py: 5 }}>
        <PreBuildDashBoard title='Popular Movies' typ="movies" movies={popularMovie}/>
      </Box>

      <Box sx={{ py: 3 }}>
        <FrameworkSection title='Now Playing' typ="movies" movies={nowplayingMovie}/>
      </Box>

      <Box sx={{ py: 3 }}>
        <FrameworkSection title='Top Rated' typ='movies' movies={topratedMovie}/>
      </Box>

      <Box sx={{ py: 5 }}>
        <PreBuildDashBoard title='Popular Shows' typ='shows' movies={popularShow}/>
      </Box>
      <Box sx={{ py: 3 }}>
        <FrameworkSection title='Now Playing' typ='shows' movies={nowplayingShow}/>
      </Box>
      <Box sx={{ py: 3 }}>
        <FrameworkSection title='Top Rated' typ='shows' movies={topratedShow}/>
      </Box>

      {/* 5. people section */}
      {/* <Box sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.dark' : 'background.default' }}>
        <PeopleSection />
      </Box> */}

      {/* 6. startup section */}
      {/* <Box sx={{ py: 0 }}>
        <StartupProjectSection />
      </Box> */}

      {/* framework section */}
      {/* <Box sx={{ py: 3 }}>
        <FrameworkSection />
      </Box>
      <Box sx={{ py: 3 }}>
        <FrameworkSection />
      </Box>
      <Box sx={{ py: 3 }}>
        <FrameworkSection />
      </Box> */}

      {/* footer section */}
      {/* <Box sx={{ py: 12.5, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </Box> */}
      {/* <Customization /> */}
    </Box>
  );
};

export default Landing;
