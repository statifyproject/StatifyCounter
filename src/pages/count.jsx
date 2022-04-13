import { createEffect } from 'solid-js';

import '../scss/count.scss';
import loading from '../images/loading.webp';

createEffect(async () => {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    await fetch(
        `https://api.statify.live/${params.get('service')}/${params.get(
            'user',
        )}`,
    )
        .then((res) => res.json())
        .then((json) => {
            data.avatar = json.data?.avatar || json.data?.icon;
            data.username = json.data?.username || json.data?.name;
            data.code = json.code;
            data.statValue = json.data?.[params.get('stat')];
            console.log(data);
        });
    if (data.code == 200) {
        document.getElementById('avatar').src = data.avatar;
        document.getElementById('username').innerHTML = data.username;
        document.getElementById('counter').innerHTML = data.statValue;
    } else {
        document.getElementById('username').innerHTML = '404';
    }
});

export default function Count() {
    return (
        <>
            <div class='background' id='background'>
                <center>
                    <div class='user'>
                        <img id='avatar' class='avatar' src={loading} />
                        <div class='username'>
                            <h1 id='username'>Loading...</h1>
                        </div>
                        <div id='counter'>Crunching numbers...</div>
                    </div>
                </center>
            </div>
        </>
    );
}
