var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3179812213348363,
        "pitch": 0.14278060540647175,
        "fov": 1.3634252556707245
      },
      "linkHotspots": [
        {
          "yaw": -2.626295901569401,
          "pitch": -0.06164658642937937,
          "rotation": 0,
          "target": "1-bed-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.702482989450992,
          "pitch": 0.27521700838871155,
          "title": "Lantai Vinyl HPL",
          "text": "Tidak berbau,<div>Awet</div><div>Anti Air</div><div>Mudah dibersihkan</div>"
        },
        {
          "yaw": -0.6985450084571241,
          "pitch": 0.26840433273522635,
          "title": "Sofa Santai",
          "text": "4 Seat<div>Bahan Kulit Asli</div><div>Empuk&nbsp;</div>"
        }
      ]
    },
    {
      "id": "1-bed-room",
      "name": "bed room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9612274405859829,
          "pitch": 0.03188612574702887,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 0.6583575142089018,
          "pitch": -0.11728246778736029,
          "rotation": 0,
          "target": "2-balcon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcon",
      "name": "balcon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.43317514225540776,
          "pitch": 0.06050206866571628,
          "rotation": 0,
          "target": "1-bed-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rumah Baru",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
