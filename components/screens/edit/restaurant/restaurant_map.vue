<template>
  <div class="map-container yelp-map-container">
    <div class="engine-container" style="background-color: rgb(229, 227, 223); position: relative; overflow: hidden;">
      <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
        <div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;">
          <div tabindex="0"
               style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;">
            <div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
              <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                  <div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -18, -115);">
                    <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;">
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px;">
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px;">
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px;">
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px;">
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px;">
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
                <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
                  <div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -18, -115);">
                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"></div>
                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 0px;"></div>
                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: -256px;"></div>
                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: -256px;"></div>
                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 256px;"></div>
                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 256px;"></div>
                  </div>
                </div>
                <div style="width: 24px; height: 32px; overflow: hidden; position: absolute; left: -12px; top: -32px; z-index: 0;"><img alt=""
                                                                                                                                        src="data:image/svg+xml;charset=UTF-8,%0A%20%20%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%20-2%2024%2032%22%20width%3D%2224%22%20height%3D%2232%22%3E%0A%20%20%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstyle%3E.c%7Bfill%3Argba(255%2C%20255%2C%20255%2C%201)%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22rgba(211%2C%2035%2C%2035%2C%201)%22%20d%3D%22M22.5%2C11.5A10.5%2C10.5%2C0%2C1%2C0%2C8.27%2C21.31L12%2C31l3.73-9.69A10.49%2C10.49%2C0%2C0%2C0%2C22.5%2C11.5Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M8.05%2C10.58l2.64%2C1.29A.61.61%2C0%2C0%2C1%2C10.58%2C13l-2.85.71A.61.61%2C0%2C0%2C1%2C7%2C13.2a5.22%2C5.22%2C0%2C0%2C1%2C.24-2.26A.61.61%2C0%2C0%2C1%2C8.05%2C10.58Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M9.11%2C16l2-2.19a.61.61%2C0%2C0%2C1%2C1.06.43L12%2C17.21a.61.61%2C0%2C0%2C1-.71.58%2C5.26%2C5.26%2C0%2C0%2C1-2.11-.85A.61.61%2C0%2C0%2C1%2C9.11%2C16Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M13.78%2C13.12l2.8.91a.61.61%2C0%2C0%2C1%2C.36.84%2C5.26%2C5.26%2C0%2C0%2C1-1.4%2C1.79.61.61%2C0%2C0%2C1-.9-.15L13.08%2C14A.61.61%2C0%2C0%2C1%2C13.78%2C13.12Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M16.62%2C11.33l-2.83.81a.61.61%2C0%2C0%2C1-.67-.92l1.64-2.44a.61.61%2C0%2C0%2C1%2C.9-.12A5.22%2C5.22%2C0%2C0%2C1%2C17%2C10.51.61.61%2C0%2C0%2C1%2C16.62%2C11.33Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M10%2C4.47A8.46%2C8.46%2C0%2C0%2C0%2C8.56%2C5a.61.61%2C0%2C0%2C0-.26.85l2.76%2C4.79a.61.61%2C0%2C0%2C0%2C1.13-.3V4.81a.61.61%2C0%2C0%2C0-.65-.6A8.46%2C8.46%2C0%2C0%2C0%2C10%2C4.47Z%22%20%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A"
                                                                                                                                        draggable="false"
                                                                                                                                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 24px; height: 32px; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                </div>
              </div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                <div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -18, -115);">
                  <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation"
                                                                                                                                               src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i5243!3i12663!4i256!2m3!1e0!2sm!3i519235628!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmx8cC52Om9mZixzLnQ6MjB8cC52Om9mZg!4e0!5m1!5f2&amp;client=gme-yelp&amp;token=89591"
                                                                                                                                               style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                  </div>
                  <div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation"
                                                                                                                                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i5242!3i12663!4i256!2m3!1e0!2sm!3i519235628!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmx8cC52Om9mZixzLnQ6MjB8cC52Om9mZg!4e0!5m1!5f2&amp;client=gme-yelp&amp;token=102663"
                                                                                                                                                  style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                  </div>
                  <div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation"
                                                                                                                                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i5243!3i12662!4i256!2m3!1e0!2sm!3i519235628!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmx8cC52Om9mZixzLnQ6MjB8cC52Om9mZg!4e0!5m1!5f2&amp;client=gme-yelp&amp;token=72259"
                                                                                                                                                  style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                  </div>
                  <div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation"
                                                                                                                                                     src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i5242!3i12662!4i256!2m3!1e0!2sm!3i519235628!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmx8cC52Om9mZixzLnQ6MjB8cC52Om9mZg!4e0!5m1!5f2&amp;client=gme-yelp&amp;token=85331"
                                                                                                                                                     style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                  </div>
                  <div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation"
                                                                                                                                                 src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i5243!3i12664!4i256!2m3!1e0!2sm!3i519235628!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmx8cC52Om9mZixzLnQ6MjB8cC52Om9mZg!4e0!5m1!5f2&amp;client=gme-yelp&amp;token=106923"
                                                                                                                                                 style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                  </div>
                  <div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation"
                                                                                                                                                    src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i5242!3i12664!4i256!2m3!1e0!2sm!3i519235628!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmx8cC52Om9mZixzLnQ6MjB8cC52Om9mZg!4e0!5m1!5f2&amp;client=gme-yelp&amp;token=119995"
                                                                                                                                                    style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                  </div>
                </div>
              </div>
            </div>
            <div class="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;"><p
              class="gm-style-pbt"></p></div>
            <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;">
              <div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;">
                  <div title="" style="width: 24px; height: 32px; overflow: hidden; position: absolute; opacity: 0; cursor: pointer; touch-action: none; left: -12px; top: -32px; z-index: 0;"><img
                    alt=""
                    src="data:image/svg+xml;charset=UTF-8,%0A%20%20%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%20-2%2024%2032%22%20width%3D%2224%22%20height%3D%2232%22%3E%0A%20%20%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstyle%3E.c%7Bfill%3Argba(255%2C%20255%2C%20255%2C%201)%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22rgba(211%2C%2035%2C%2035%2C%201)%22%20d%3D%22M22.5%2C11.5A10.5%2C10.5%2C0%2C1%2C0%2C8.27%2C21.31L12%2C31l3.73-9.69A10.49%2C10.49%2C0%2C0%2C0%2C22.5%2C11.5Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M8.05%2C10.58l2.64%2C1.29A.61.61%2C0%2C0%2C1%2C10.58%2C13l-2.85.71A.61.61%2C0%2C0%2C1%2C7%2C13.2a5.22%2C5.22%2C0%2C0%2C1%2C.24-2.26A.61.61%2C0%2C0%2C1%2C8.05%2C10.58Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M9.11%2C16l2-2.19a.61.61%2C0%2C0%2C1%2C1.06.43L12%2C17.21a.61.61%2C0%2C0%2C1-.71.58%2C5.26%2C5.26%2C0%2C0%2C1-2.11-.85A.61.61%2C0%2C0%2C1%2C9.11%2C16Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M13.78%2C13.12l2.8.91a.61.61%2C0%2C0%2C1%2C.36.84%2C5.26%2C5.26%2C0%2C0%2C1-1.4%2C1.79.61.61%2C0%2C0%2C1-.9-.15L13.08%2C14A.61.61%2C0%2C0%2C1%2C13.78%2C13.12Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M16.62%2C11.33l-2.83.81a.61.61%2C0%2C0%2C1-.67-.92l1.64-2.44a.61.61%2C0%2C0%2C1%2C.9-.12A5.22%2C5.22%2C0%2C0%2C1%2C17%2C10.51.61.61%2C0%2C0%2C1%2C16.62%2C11.33Z%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22c%22%20d%3D%22M10%2C4.47A8.46%2C8.46%2C0%2C0%2C0%2C8.56%2C5a.61.61%2C0%2C0%2C0-.26.85l2.76%2C4.79a.61.61%2C0%2C0%2C0%2C1.13-.3V4.81a.61.61%2C0%2C0%2C0-.65-.6A8.46%2C8.46%2C0%2C0%2C0%2C10%2C4.47Z%22%20%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A"
                    draggable="false" style="position: absolute; left: 0px; top: 0px; user-select: none; width: 24px; height: 32px; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                </div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
              </div>
            </div>
          </div>
          <iframe aria-hidden="true" frameborder="0" tabindex="-1" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;"></iframe>
          <div style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"><a target="_blank" rel="noopener"
                                                                                                                             href="https://maps.google.com/maps?ll=37.792877,-122.397905&amp;z=15&amp;t=m&amp;hl=en&amp;gl=US&amp;mapclient=apiv3"
                                                                                                                             title="Open this area in Google Maps (opens a new window)"
                                                                                                                             style="position: static; overflow: visible; float: none; display: inline;">
            <div style="width: 66px; height: 26px; cursor: pointer;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5_hdpi.png" draggable="false"
                                                                          style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;">
            </div>
          </a></div>
          <div
            style="background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 278px; height: 180px; position: absolute; left: 5px; top: 54px;">
            <div style="padding: 0px 0px 10px; font-size: 16px; box-sizing: border-box;">Map Data</div>
            <div style="font-size: 13px;">Map data ??2020 Google</div>
            <button
              draggable="false"
              title="Close"
              aria-label="Close"
              type="button"
              class="gm-ui-hover-effect"
              style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: absolute; cursor: pointer; user-select: none; top: 0px; right: 0px; width: 37px; height: 37px;"
            >
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                style="pointer-events: none; display: block; width: 13px; height: 13px; margin: 12px;">
            </button>
          </div>
          <div class="gmnoprint" style="z-index: 1000001; position: absolute; right: 72px; bottom: 0px; width: 121px;">
            <div draggable="false" class="gm-style-cc" style="user-select: none; height: 14px; line-height: 14px;">
              <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                <div style="width: 1px;"></div>
                <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
              </div>
              <div
                style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;">
                <a style="text-decoration: none; cursor: pointer; display: none;">Map Data</a><span>Map data ??2020 Google</span></div>
            </div>
          </div>
          <div class="gmnoscreen" style="position: absolute; right: 0px; bottom: 0px;">
            <div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">Map data ??2020
              Google
            </div>
          </div>
          <div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;">
            <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
              <div style="width: 1px;"></div>
              <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
            </div>
            <div
              style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;">
              <a href="https://www.google.com/intl/en_US/help/terms_maps.html" target="_blank" rel="noopener" style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);">Terms of Use</a>
            </div>
          </div>
          <button
            draggable="false"
            title="Toggle fullscreen view"
            aria-label="Toggle fullscreen view"
            type="button"
            class="gm-control-active gm-fullscreen-control"
            style="background: none rgb(255, 255, 255); border: 0px; margin: 7px; padding: 0px; position: absolute; cursor: pointer; user-select: none; border-radius: 2px; height: 28px; width: 28px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; overflow: hidden; display: none; top: 0px; right: 0px;"
          >
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              style="height: 18px; width: 18px;"><img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
            style="height: 18px; width: 18px;"><img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
            style="height: 18px; width: 18px;">
          </button>
          <div draggable="false" class="gm-style-cc" style="user-select: none; height: 14px; line-height: 14px; display: none; position: absolute; right: 0px; bottom: 0px;">
            <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
              <div style="width: 1px;"></div>
              <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
            </div>
            <div
              style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;">
              <a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google"
                 href="https://www.google.com/maps/@37.7928767,-122.3979051,15z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3"
                 style="font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;">Report a map error</a></div>
          </div>
          <div class="gmnoprint gm-bundled-control" draggable="false" controlwidth="28" controlheight="57" style="margin: 7px; user-select: none; position: absolute; left: 0px; top: 0px;">
            <div class="gmnoprint" controlwidth="28" controlheight="57" style="position: absolute; left: 0px; top: 0px;">
              <div draggable="false"
                   style="user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 28px; height: 57px;">
                <button
                  draggable="false"
                  title="Zoom in"
                  aria-label="Zoom in"
                  type="button"
                  class="gm-control-active"
                  style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 28px; height: 28px; top: 0px; left: 0px;"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"><img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style="height: 18px; width: 18px;"><img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style="height: 18px; width: 18px;">
                </button>
                <div style="position: relative; overflow: hidden; width: 21px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); top: 0px;"></div>
                <button
                  draggable="false"
                  title="Zoom out"
                  aria-label="Zoom out"
                  type="button"
                  class="gm-control-active"
                  style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 28px; height: 28px; top: 0px; left: 0px;"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"><img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style="height: 18px; width: 18px;"><img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style="height: 18px; width: 18px;">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./restaurant_map.ts" />
