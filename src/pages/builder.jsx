import '../scss/builder.scss';
//import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';

export default function Builder() {
    return (
        <>
            <form action='/count'>
                <label for='user'>Lookup:</label>
                <input type='text' id='user' name='user' />
                <br />
                <label for='service'>Service:</label>
                <select name='service' id='service'>
                    <option value='discord'>Discord</option>
                    <option value='roblox'>Roblox</option>
                    <option value='steam'>Steam</option>
                    <option value='twitch'>Twitch</option>
                    <option value='twitter'>Twitter</option>
                    <option value='youtube'>YouTube</option>
                </select>
                <br />
                <label for='stat'>Stat:</label>
                <select name='stat' id='stat'>
                    <option value='subscribers'>Subscribers</option>
                    <option value='views'>Views</option>
                    <option value='videos'>Videos</option>
                </select>
                <br />
                <input type='submit' value='Build' />
            </form>
        </>
    );
}
