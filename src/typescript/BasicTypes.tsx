export const BasicTypes = () => {

    let name: string = 'Oscar';
    const year: number = 35;
    const isEnable: boolean = true;
    const skills: string[] = ['speed', 'fly', 'strong'];

    return (
        <>
            <h3>Basic Types</h3>
            { name }, { year }, { (isEnable) ? 'enable' : 'disable' }
            <br></br>
            { skills.join(',') }
        </>
    )
}