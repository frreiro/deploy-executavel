import collectProcesses from '../services/collect';

const keywords = ['code.exe'];

//TODO: recolocar a request
const collect = (timer: number) => {
  setTimeout(async () => {
    const processes = await collectProcesses(keywords);
    console.log(processes)
    collect(timer);
  }, timer);
};

export default collect 