MapPin example:

**Imports**

> import FaMapPin from 'react-icons/lib/fa/map-pin';  
> import theme from '../../styles/theme';  
> import style from './style';

```js
<div>
  <MapPin />
  <MapPin
    lat={39.28756}
    lng={120.19987}
    color="primary"
  />
  <MapPin
    color="accent"
  />
  <MapPin
    color="start"
  />
  <MapPin
    color="end"
  />
</div>
```

Lat and Lng are given to this component when combined with google-map-react  
and is sized and margin to land on the correct location.  
Without this, the pin would be low and to the right.
