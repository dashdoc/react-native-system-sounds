#import "RNSystemSounds.h"
#import <AudioToolbox/AudioToolbox.h>

@implementation RNSystemSounds

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(playSystemSound: (nonnull NSInteger *) soundID){
    AudioServicesPlaySystemSound (soundID);
}

@end
