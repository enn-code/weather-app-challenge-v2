const initialState = {
  search: {
    searchTerm: 'London',
  },
  weatherData: {
    isLoading: false,
    weather: {
      list: [{
        clouds: { all: 76 },
        dt: 1539313200,
        dt_txt: '2018-10-12 03:00:00',
        main: {
          temp: 287.75, temp_min: 287.75, temp_max: 288.149, pressure: 1014.78, sea_level: 1022.3,
        },
        rain: { '3h': 0.05 },
        sys: { pod: 'n' },
        weather: [{ description: 'cloudy' }],
        wind: { speed: 6.61, deg: 198.501 },
      }, {
        clouds: { all: 64 },
        dt: 1539324000,
        dt_txt: '2018-10-12 06:00:00',
        main: {
          temp: 288.03, temp_min: 288.03, temp_max: 288.327, pressure: 1014.98, sea_level: 1022.56,
        },
        rain: {},
        sys: { pod: 'n' },
        weather: [{ description: 'rainy' }],
        wind: { speed: 7.36, deg: 188 },
      }, {
        clouds: { all: 100 },
        dt: 1539334800,
        dt_txt: '2018-10-12 09:00:00',
        main: {
          temp: 288.82, temp_min: 288.82, temp_max: 289.022, pressure: 1015.65, sea_level: 1023.1,
        },
        rain: { '3h': 0.935 },
        sys: { pod: 'd' },
        weather: [{ description: 'clear' }],
        wind: { speed: 7.83, deg: 188.001 },
      }],
    },
  },
};

export default initialState;
