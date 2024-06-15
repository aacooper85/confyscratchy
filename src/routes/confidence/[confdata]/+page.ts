/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        datastring: params.confdata
    };
}