#import "RNSystemSounds.h"
#import <AudioToolbox/AudioToolbox.h>

@implementation RNSystemSounds

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(playSystemSound: (nonnull NSNumber *) soundID){
    // Convert NSNumber to int (intValue) and then cast to SystemSoundID (UInt32)
    SystemSoundID sysSoundID = (SystemSoundID)[soundID intValue];
    AudioServicesPlaySystemSound (sysSoundID);
}

@end