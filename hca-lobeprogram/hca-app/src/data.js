export const PHASES = [
  {
    label: "Fase 1 — Basisopbygning",
    badge: "base", badgeText: "Base",
    weeks: [
      { label: "Uge 1 · 21–27 apr", sub: "Kom i gang · ca. 25 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","6 km"],["Ons","Hvile eller gåtur",""],["Tor","Rolig løbetur","5 km"],["Fre","Hvile",""],["Lør","Rolig langtur","8 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 2 · 28 apr–4 maj", sub: "Opbyg vane · ca. 28 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","7 km"],["Ons","Hvile eller yoga",""],["Tor","Fartleg 5×1 min hurtig/rolig","6 km"],["Fre","Hvile",""],["Lør","Langtur rolig","10 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 3 · 5–11 maj", sub: "Rutine · ca. 30 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","7 km"],["Ons","Hvile",""],["Tor","Tempotur i 5:10 pace","6 km"],["Fre","Hvile",""],["Lør","Langtur","12 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 4 · 12–18 maj — HVILEUGE", sub: "Restitution · ca. 22 km",
        days: [["Man","Hvile",""],["Tir","Let løbetur","5 km"],["Ons","Hvile",""],["Tor","Rolig løbetur","5 km"],["Fre","Hvile",""],["Lør","Let langtur","8 km"],["Søn","Hvile",""]] },
    ]
  },
  {
    label: "Fase 2 — Opbygning",
    badge: "build", badgeText: "Opbyg",
    weeks: [
      { label: "Uge 5 · 19–25 maj", sub: "Intro intervaller · ca. 33 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","8 km"],["Ons","Hvile",""],["Tor","Intervaller: 4×800m i 4:50–5:00","7 km"],["Fre","Hvile",""],["Lør","Langtur","14 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 6 · 26 maj–1 jun", sub: "Øg langtur · ca. 36 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","9 km"],["Ons","Hvile",""],["Tor","Tempotur: 3 km i måltempo 5:27","7 km"],["Fre","Hvile",""],["Lør","Langtur","15 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 7 · 2–8 jun", sub: "Hårdere uge · ca. 38 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","9 km"],["Ons","Hvile",""],["Tor","Intervaller: 5×1 km i 5:05–5:15","8 km"],["Fre","Hvile",""],["Lør","Langtur","16 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 8 · 9–15 jun — HVILEUGE", sub: "Restitution · ca. 25 km",
        days: [["Man","Hvile",""],["Tir","Let løbetur","6 km"],["Ons","Hvile",""],["Tor","Rolig løbetur","6 km"],["Fre","Hvile",""],["Lør","Let langtur","10 km"],["Søn","Hvile",""]] },
    ]
  },
  {
    label: "Fase 3 — Intensitet",
    badge: "peak", badgeText: "Peak",
    weeks: [
      { label: "Uge 9 · 16–22 jun", sub: "Tempo fokus · ca. 40 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","10 km"],["Ons","Hvile",""],["Tor","Tempotur: 5 km i 5:20–5:27","8 km"],["Fre","Hvile",""],["Lør","Langtur","17 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 10 · 23–29 jun", sub: "Maks volumen · ca. 42 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","10 km"],["Ons","Hvile",""],["Tor","Intervaller: 6×1 km race pace","9 km"],["Fre","Hvile",""],["Lør","Langtur — vigtig!","18 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 11 · 30 jun–6 jul", sub: "Stærk uge · ca. 42 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","10 km"],["Ons","Hvile",""],["Tor","Tempotur: 6 km race pace","9 km"],["Fre","Hvile",""],["Lør","Langtur","18 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 12 · 7–13 jul — HVILEUGE", sub: "Restitution · ca. 27 km",
        days: [["Man","Hvile",""],["Tir","Let løbetur","7 km"],["Ons","Hvile",""],["Tor","Rolig løbetur","6 km"],["Fre","Hvile",""],["Lør","Let langtur","10 km"],["Søn","Hvile",""]] },
    ]
  },
  {
    label: "Fase 4 — Topform",
    badge: "peak", badgeText: "Peak",
    weeks: [
      { label: "Uge 13 · 14–20 jul", sub: "Hård uge · ca. 44 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","11 km"],["Ons","Hvile",""],["Tor","Intervaller: 3×2 km race pace","9 km"],["Fre","Hvile",""],["Lør","Langtur — maks!","19 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 14 · 21–27 jul", sub: "Vedligehold · ca. 40 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","10 km"],["Ons","Hvile",""],["Tor","Tempotur: 8 km race pace","10 km"],["Fre","Hvile",""],["Lør","Langtur","17 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 15 · 28 jul–3 aug", sub: "Afsluttende peak · ca. 43 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","10 km"],["Ons","Hvile",""],["Tor","Intervaller: 4×2 km race pace","10 km"],["Fre","Hvile",""],["Lør","Langtur 18–19 km rolig","18 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 16 · 4–10 aug — HVILEUGE", sub: "Restitution · ca. 27 km",
        days: [["Man","Hvile",""],["Tir","Let løbetur","7 km"],["Ons","Hvile",""],["Tor","Rolig løbetur","7 km"],["Fre","Hvile",""],["Lør","Let langtur","10 km"],["Søn","Hvile",""]] },
    ]
  },
  {
    label: "Fase 5 — Nedtrapning (Taper)",
    badge: "taper", badgeText: "Taper",
    weeks: [
      { label: "Uge 17 · 11–17 aug", sub: "Første taper · ca. 35 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","9 km"],["Ons","Hvile",""],["Tor","Tempotur: 5 km race pace","8 km"],["Fre","Hvile",""],["Lør","Langtur, rolig","14 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 18 · 18–24 aug", sub: "Reducer volumen · ca. 30 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","8 km"],["Ons","Hvile",""],["Tor","Interval: 3×1 km race pace","7 km"],["Fre","Hvile",""],["Lør","Kortere langtur","12 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 19 · 25–31 aug", sub: "Let volumen · ca. 25 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","7 km"],["Ons","Hvile",""],["Tor","Let tempotur: 4 km","6 km"],["Fre","Hvile",""],["Lør","Let langtur","10 km"],["Søn","Aktiv hvile",""]] },
      { label: "Uge 20 · 1–7 sep", sub: "Taper · ca. 22 km",
        days: [["Man","Hvile",""],["Tir","Rolig løbetur","6 km"],["Ons","Hvile",""],["Tor","3 km i race pace","5 km"],["Fre","Hvile",""],["Lør","Let langtur","8 km"],["Søn","Aktiv hvile",""]] },
    ]
  },
  {
    label: "Fase 6 — Raceuge",
    badge: "race", badgeText: "Race",
    weeks: [
      { label: "Uge 21 · 8–14 sep", sub: "Meget let uge · ca. 18 km",
        days: [["Man","Hvile",""],["Tir","Let løbetur","5 km"],["Ons","Hvile",""],["Tor","Let løbetur + 4×100m strides","5 km"],["Fre","Hvile",""],["Lør","Meget let joggetur","5 km"],["Søn","Hvile",""]] },
      { label: "Uge 22 — RACEUGE · 15–27 sep", sub: "Spar kræfter!",
        days: [["Man","Hvile",""],["Tir","Let løbetur","3 km"],["Ons","Hvile",""],["Tor","Let joggetur + 3 strides","3 km"],["Fre","Hvile — pak tasken",""],["Lør","Kort løbetur 15 min rolig","2 km"],["Søn","🏁 HCA Halvmaraton!","21,1 km"]] },
    ]
  }
]
