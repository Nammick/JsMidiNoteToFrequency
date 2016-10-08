var midiNoteToFrequency = function(midiNote) 
{
	return Math.exp ((midiNote-69) * Math.log(2) / 12) * 440;
}
