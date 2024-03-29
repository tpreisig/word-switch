import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 7890;

const data = `[{"word":"spry","pronunciation":"spraɪ","meaning":"(especially of older people) active and able to move quickly and energetically.","sentence_1":"He was amazingly spry for a man of almost 80.","sentence_2":"A spry elderly lady was pulling weeds in a large garden."},{"word":"concession","pronunciation":"kənˈseʃ.ən","meaning":"something that is allowed or given up, often in order to end a disagreement, or the act of allowing or giving this.","sentence_1":"Both sides involved in the conflict made some concessions in yesterday's talks.","sentence_2":"As a concession to environmental groups, the energy giant agreed to scale down its coal plant expansion plans."},{"word":"obscuration","pronunciation":"ˌɒb.skjʊəˈreɪ.ʃən","meaning":"the act of preventing something from being seen or heard, or something that prevents something else from being seen or heard.","sentence_1":"Obscuration can be obtained by the use of blackout curtains.","sentence_2":"An obscuration of the truth."},{"word":"consecutive","pronunciation":"kənˈsek.jə.tɪv","meaning":"Consecutive events, numbers, etc. follow one after another without an interruption.","sentence_1":"This is the fifth consecutive weekend that I've spent working.","sentence_2":"Unemployment has risen again for the third consecutive month."},{"word":"succeed","pronunciation":"səkˈsiːd","meaning":"If you succeed, you achieve something that you have been aiming for, and if a plan or piece of work succeeds, it has the results that you wanted.","sentence_1":"She's been trying to pass her driving test for six years and she's finally succeeded.","sentence_2":"The campaign has certainly succeeded in raising public awareness of the issue."},{"word":"deduction","pronunciation":"dɪˈdʌk.ʃən","meaning":"the process of reaching a decision or answer by thinking about the known facts, or the decision that is reached.","sentence_1":"All we can do is make deductions from the available facts.","sentence_2":"The interest I receive on my savings account is paid after the deduction of tax."},{"word":"adulate","pronunciation":"ˈædʒ.ə.leɪt","meaning":"to admire or praise someone very much, especially when this is more than is deserved.","sentence_1":"The boxer was convicted of rape, and yet is still adulated by many.","sentence_2":"His devious scheme has perfectley fullfied and his has been adulated for things he hadn't completed himself."},{"word":"inaugural","pronunciation":"ɪˈnɔː.ɡjə.rəl","meaning":"an inaugural event is the first in a series of planned events.","sentence_1":"He plans to be on the inaugural flight when the twinjet aircraft goes into service next month.","sentence_2":"He held an inaugural ceremony last Saturday."},{"word":"cynical","pronunciation":"ˈsɪn.ɪ.kəl","meaning":"believing that people are only interested in themselves and are not sincere","sentence_1":"I've always been deeply cynical about politicians","sentence_2":"How did that trusting little child suddenly turn into such an angry, cynical teenager?"},{"word":"petulant","pronunciation":"ˈpetʃ.ə.lənt","meaning":"easily annoyed and complaining in a rude way like a child","sentence_1":"He plays the part of a petulant young man in the film","sentence_2":"It is a very valuable, informative and generally well argued, if at times somewhat petulant, book"},{"word":"insulation","pronunciation":"ˌɪn.sjəˈleɪ.ʃən","meaning":"the act of covering something to stop heat, sound, or electricity from escaping or entering, or the fact that something is covered in this way","sentence_1":"The animal's thick fur provides very good insulation against the arctic cold","sentence_2":"Glass fibre is often used as roof insulation"},{"word":"reckon","pronunciation":"ˈrek.ən","meaning":"to think or believe","sentence_1":"She's been promising to pay back the money for six months, but I reckon she's just stringing me along","sentence_2":"I reckon it's going to rain"},{"word":"yield","pronunciation":"jiːld","meaning":"to supply or produce something positive such as a profit, an amount of food, or information.","sentence_1":"Convertible bonds is a fixed-income corporate debt security that yields interest payments, but can be converted into a predetermined amount of common stock or equity shares.","sentence_2":"Some mutual funds are currently yielding 15% on new money invested."},{"word":"commotion","pronunciation":"kəˈməʊʃn","meaning":"​sudden noisy and confused activity or excitement","sentence_1":"I heard a commotion and went to see what was happening.","sentence_2":"What's all the commotion about?"},{"word":"dissent","pronunciation":"dɪˈsent","meaning":"a strong difference of opinion on a particular subject, especially about an official suggestion or plan or a popular belief.","sentence_1":"When the time came to approve the proposal, there were one or two voices of dissent.","sentence_2":"Anyone wishing to dissent from the motion should now raise their hand."},{"word":"convene","pronunciation":"kənˈviːn","meaning":"to meet formally as a group, or to arrange a meeting of people or groups for a serious purpose","sentence_1":"An emergency board meeting was convened by the directors later that afternoon","sentence_2":"Open Market Committee members will convene to discuss lowering interest rates"},{"word":"ingest","pronunciation":"ɪnˈdʒest","meaning":"to eat or drink something","sentence_1":"The chemicals can be poisonous if ingested","sentence_2":"These mushrooms are poisonous if ingested"},{"word":"inure","pronunciation":"ɪnˈjʊər","meaning":"If you become inured to something unpleasant, you become familiar with it and able to accept and bear it","sentence_1":"After spending some time on the island they became inured to the hardships","sentence_2":""},{"word":"beneficence","pronunciation":"bəˈnef.ɪ.səns","meaning":"generous giving, or the quality of being generous and doing good","sentence_1":"They rely heavily on the beneficence of their sponsors","sentence_2":"His letters show Nelson Mandela as man of beneficence"},{"word":"curtail","pronunciation":"kəˈteɪl","meaning":"to reduce or limit something","sentence_1":"They will not willingly accept any curtailment of their civil liberties.","sentence_2":"The Federal Reserve raised interest rates slightly to curtail inflation."},{"word":"frail","pronunciation":"freɪl","meaning":"weak or unhealthy, or easily damaged, broken, or harmed","sentence_1":"I last saw him just last week and thought how old and frail he looked","sentence_2":"the country's frail economy"},{"word":"spartan","pronunciation":"ˈspɑː.tən","meaning":"simple and severe with no comfort","sentence_1":"a spartan diet/meal","sentence_2":"This spartan setting has proved appealing to researchers"},{"word":"stumble","pronunciation":"ˈstʌm·bəl","meaning":"to make a mistake, or to pause unexpectedly when speaking","sentence_1":"When the poet stumbled over a line in the middle of a poem, someone in the audience corrected him","sentence_2":"She stumbled over the lines of her well-prepared and rehearsed speech"},{"word":"disclosure","pronunciation":"dɪˈskləʊ.ʒər","meaning":"something that was not previously known, or the act of giving such information to the public.","sentence_1":"Some of the disclosures in the final report were very surprising.","sentence_2":"Insurers may request the disclosure of existing genetic test results"}]`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let vocXdata;

app.get('/', (req, res) => {
    res.render("index.ejs", {
        vocX: vocXdata
    });
})

app.post("/more", (req, res) => {
    switch (req.body.details) {
        case "spry":
            vocXdata = JSON.parse(data)[0];
            break;
        case "concession":
            vocXdata = JSON.parse(data)[1];
            break;
        case "obscuration":
            vocXdata = JSON.parse(data)[2];
            break;
        case "consecutive":
            vocXdata = JSON.parse(data)[3];
            break;
        case "succeed":
            vocXdata = JSON.parse(data)[4];
            break;
        case "deduction":
            vocXdata = JSON.parse(data)[5];
            break;
        case "adulate":
            vocXdata = JSON.parse(data)[6];
            break;
        case "commotion":
            vocXdata = JSON.parse(data)[13];
            break;
        case "dissent":
            vocXdata = JSON.parse(data)[14];
            break;
        case "curtail":
            vocXdata = JSON.parse(data)[19];
            break;
        case "inaugural":
            vocXdata = JSON.parse(data)[7];
            break;
        case "disclosure":
            vocXdata = JSON.parse(data)[23];
            break;
        case "yield":
            vocXdata = JSON.parse(data)[12];
            break;
        default:
            break;
    }
    res.redirect('/');

})

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}.`)
})